import * as Yup from "yup";

export const articleCategoryValidation = Yup.object({
    description: Yup.string().required("Please Enter Category Description"),
    name: Yup.string().required("Please Enter Category Name")
})