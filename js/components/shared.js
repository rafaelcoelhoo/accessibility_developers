import {index} from '../../data/index.js';

export const getDataByKey = (key, notes) => {
    return {...notes[key]};
};

export const buildBreadcrumb = (key, path, titlePage) => {
    let breadcrumb = [{
        label: "Home",
        url: `/`
    }];

    /*const optionDetails = index.content
        .map(item => item.options?.find(option => option.id === key))
        .find(option => option !== undefined);*/

    // let matchingTopics = [];
    let titleSection;
    const options = index.content.map(item => {
        const option = item.options?.find(option => option.id === key);
        if (option) titleSection = item.title;
        return option;
    })
    const optionDetails = options.find(option => option !== undefined);

/*    if (optionDetails && optionDetails.options) {
        optionDetails.options.forEach(option => {
            if (option.topics) {
                const matchingTopic = option.topics.find(topic => topic.link.includes(path));
                if (matchingTopic) {
                    matchingTopics.push(matchingTopic);
                }
            }
        });
    }*/
    if (optionDetails) {
        breadcrumb.push({
            label: `Lessons ${titleSection}`,
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
