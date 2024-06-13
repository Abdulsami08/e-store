export const product = {

    name: "product",
    title: "Product",
    type: "document",
    fields: [
        
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name: "discription",
            title: "Product Discription",
            type: "string"
        },
        {
            name: "price",
            title: "Product price",
            type: "number"
        },
        {
            name: "image",
            title: "Product Image",
            type: "image"
        },
        {
            name: "category",
            title: " product Category ",
            type: "reference",
            to: [{
                type:"category"
            }]
        }
    ]
}
