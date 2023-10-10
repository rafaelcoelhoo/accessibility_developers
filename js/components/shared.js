import {index} from '../../data/index.js';

export const getDataByKey = (key, notes) => {
    if (!notes) return {};
    return {...notes[key]};
};

export const buildBreadcrumb = (key, path, titlePage, rootKey, isIndex) => {
    let breadcrumb = [{
        label: "Home",
        url: `/`
    }];

    let titleSection;
    let moduleId;
    let optionDetails;

    if (!rootKey) {
        const options = index.content.map(item => {
            const option = item.options?.find(option => option.id === key);
            if (option) {
                titleSection = item.title;
                moduleId = item.id;
            }

            return option;
        })
        optionDetails = options.find(option => option !== undefined);
    } else {
        const options = index.content.find(item => item && item?.id === rootKey);
        if (options) {
            titleSection = options.title;
            moduleId = options && options.id;
        }
    }
    if (titleSection && moduleId) {
        breadcrumb.push({
            label: titleSection,
            url: `/?moduleId=${moduleId}`,
            currentPage: isIndex
        })
    }

    if (optionDetails && optionDetails.label && !isIndex) {
        breadcrumb.push({
            label: `${optionDetails.label} Lessons`,
            url: `/?id=${optionDetails.id}`
        });
    }
    if (!isIndex || (isIndex && key)) {
        breadcrumb.push({
            label: titlePage,
            url: `#`,
            currentPage: true
        })
    }
    return breadcrumb
};
