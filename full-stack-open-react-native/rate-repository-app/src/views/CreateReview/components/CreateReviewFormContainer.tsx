import { Formik } from "formik";
import * as yup from "yup";
import CreateReviewForm from "./CreateReviewForm";

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup.number().typeError("Please enter only numbers").min(0).max(100).required("Rating is required"),
  text: yup.string().optional(),
});

type ReviewParams = {
  ownerName: string;
  repositoryName: string;
  rating: string,
  text:  string
};

const initialValues = {
  ownerName: "",
  rating: "",
  repositoryName: "",
  text: ""
};

export default function CreateReviewFormContainer({onSubmit}: {onSubmit: ({ownerName, repositoryName, rating, text}: ReviewParams) => void}) {
    
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
}
