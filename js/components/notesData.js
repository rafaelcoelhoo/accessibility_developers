import {index} from '../../data/index.js';

export const getDataByKey = (key, notes) => {
    return {...notes[key]};
};

export const buildBreadcrumb = (key, path, titlePage) => {
    let breadcrumb = [{
        label: "Home",
        url: `/`
    }];

    const optionDetails = index.content
        .map(item => item.options?.find(option => option.id === key))
        .find(option => option !== undefined);

    let matchingTopics = [];

    console.log(optionDetails);
    if (optionDetails && optionDetails.options) {
        optionDetails.options.forEach(option => {
            if (option.topics) {
                const matchingTopic = option.topics.find(topic => topic.link.includes(path));
                if (matchingTopic) {
                    matchingTopics.push(matchingTopic);
                }
            }
        });
    }
    if (optionDetails) {
        breadcrumb.push({
            label: optionDetails.label,
            url: `/?id=${optionDetails.id}`
        });
    }
    breadcrumb.push({
        label: titlePage,
        url: `#`,
        currentPage: true
    })
    return breadcrumb
};
