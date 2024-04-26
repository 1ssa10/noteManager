import React from "react";
import * as Yup from "yup";

const validationEdit = Yup.object({
  categoryNam: Yup.string().required("Enter the new  name"),
});

export { validationEdit };
