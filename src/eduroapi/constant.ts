export const rsaKey = '30820122300d06092a864886f70d01010105000382010f003082010a0282010100f357429c22add0d547ee3e4e876f921a0114d1aaa2e6eeac6177a6a2e2565ce9593b78ea0ec1d8335a9f12356f08e99ea0c3455d849774d85f954ee68d63fc8d6526918210f28dc51aa333b0c4cdc6bf9b029d1c50b5aef5e626c9c8c9c16231c41eef530be91143627205bbbf99c2c261791d2df71e69fbc83cdc7e37c1b3df4ae71244a691c6d2a73eab7617c713e9c193484459f45adc6dd0cba1d54f1abef5b2c34dee43fc0c067ce1c140bc4f81b935c94b116cce404c5b438a0395906ff0133f5b1c6e3b2bb423c6c350376eb4939f44461164195acc51ef44a34d4100f6a837e3473e3ce2e16cedbe67ca48da301f64fc4240b878c9cc6b3d30c316b50203010001'



export function getSurvey(token: string, name: string) {
    return {
        deviceUuid: "",
        rspns00: "Y",
        rspns01: "1",
        rspns02: "1",
        rspns03: null,
        rspns04: null,
        rspns05: null,
        rspns06: null,
        rspns07: null,
        rspns08: null,
        rspns09: "0",
        rspns10: null,
        rspns11: null,
        rspns12: null,
        rspns13: null,
        rspns14: null,
        rspns15: null,
        upperToken: token,
        upperUserNameEncpt: name
    }
}



export const provinces = {
    '서울특별시': '01',
    '부산광역시': '02',
    '대구광역시': '03',
    '인천광역시': '04',
    '광주광역시': '05',
    '대전광역시': '06',
    '울산광역시': '07',
    '세종특별자치시': '08',
    '경기도': '10',
    '강원도': '11',
    '충청북도': '12',
    '충청남도': '13',
    '전라북도': '14',
    '전라남도': '15',
    '경상북도': '16',
    '경상남도': '17',
    '제주특별자치도': '18',
}



export const schoolType = {
    '유치원': '1',
    '초등학교': '2',
    '중학교': '3',
    '고등학교': '4',
    '특수학교': '5'
}