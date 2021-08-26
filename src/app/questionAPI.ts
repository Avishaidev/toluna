import {Questions} from "../types/Questions";
import {AnswerInterface} from "../types/AnswerInterface";

export const guid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

export const fetchInitData = () => {
    return new Promise<any>((resolve => {
        const localData = getLocalStorageData();
        if (localData && localData.question) {
            resolve(localData);
        } else {
            fetch('https://toluna-digital-commons.s3.amazonaws.com/toluna-frontend-developer-test-v2/data.json')
                .then(response => response.json())
                .then(response => {
                    let data = response[0];
                    data.answers.forEach((answer:AnswerInterface) => {
                        answer.id = guid();
                    })

                    resolve(data);
                })
        }
    }))
}

export const updateLocalStorageData = (state:Questions) => {
    localStorage.setItem('data', JSON.stringify(state));
}

export const getLocalStorageData = () => {
    const localData = localStorage.getItem('data');
    if (localData) {
        return JSON.parse(localData);
    }

    return {};
}