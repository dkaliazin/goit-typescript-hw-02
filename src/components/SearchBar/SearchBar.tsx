import { Formik, Form, Field } from "formik";
import css from "./SearchBar.module.css";
import toast from 'react-hot-toast';
interface SearchBarProps {
  onSearch:(topicName:string) =>Promise<void>
}
const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <header>
      <Formik
        initialValues={{ topicName: "" }}
        onSubmit={(values, actions) => {
          const { topicName } = values;

          if (topicName.trim() === "") {
            toast.error("Please fill a search box"); 
            actions.setSubmitting(false); 
            return;
          }
          onSearch(topicName);
          actions.resetForm();
        }}
      >
        <Form className={css.searchbar}>
          <Field
            type="text"
            name="topicName"
            autoComplete="off"
            placeholder="Search by name"
          />
          <button type="submit" className={css.button}>Search</button>
        </Form>
      </Formik>
    </header>
  );
}
export default SearchBar;



/*export default function SearchBar({ onSearch }) {
  return (
    <header>
      <Formik
        initialValues={{ topicName: "" }}
        onSubmit={(values, actions) => {
          const { topicName } = values;

          if (topicName.trim() === "") {
            toast.error("Please fill a search box"); 
            actions.setSubmitting(false); 
            return;
          }

          onSearch(topicName);
          actions.resetForm();
        }}
      >
        <Form className={css.searchbar}>
          <Field
            type="text"
            name="topicName"
            autoComplete="off"
            placeholder="Search by name"
          />
          <button type="submit" className={css.button}>Search</button>
        </Form>
      </Formik>
    </header>
  );
}*/