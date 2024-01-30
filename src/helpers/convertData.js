const convertData = (data , type) =>{
    const convertData = data[type].map(item => {
        return {
            data :item[0],
            [type] : item[1],
        }
    })
 return convertData
}
export {convertData}