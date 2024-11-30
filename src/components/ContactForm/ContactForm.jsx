import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsSlice";
import { useDispatch } from 'react-redux';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "The field cannot be less than 3 characters")
    .max(50, "The field cannot be more than 50 characters")
    .required("This field is required"),
  number: Yup.string()

    .min(3)
    .max(50)
    .required("This field is required"),
});


const ContactForm = () => {
    const dispatch = useDispatch();

  const handleSubmit = (values, {resetForm}) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <Formik
    initialValues = {{name: '', number: ''}}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
     
    >
      <Form className={s.form}>
        <label htmlFor="name">
          <span className={s.text}>Name</span>
        </label>
        <Field className={s.name} type="text" id="name" name="name" />
        <ErrorMessage name="name" component="span" />

        <label htmlFor="number">
          <span className={s.text} >Number</span>
        </label>
        <Field className={s.number} type="text" name="number" />
        <ErrorMessage name="number" component="span" />

        <button className={s.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;