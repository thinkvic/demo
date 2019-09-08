import { useState } from 'react';

const useForm = (initialValues, callback) => {
  const [inputs, setInputs] = useState(initialValues);
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback();
  }

  // React wraps native browser events into instances of the SyntheticEvent. 
  // A synthetic event cannot be accessed asynchronously because React reuses it 
  // once its handler is called. As possible solutions, we can call event.persist() 
  // or we can cache the needed event properties until they’re finally used.

  const handleInputChange = (event) => {
    event.persist();
    // to access prev latest inputs, need a callback functional updates
    // does not automatically merge update objects. Need spread first
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
  }


  const clear = (d) => {
    setInputs(d);
  }
  return {
    handleSubmit,
    handleInputChange,
    clear,
    inputs
  };
}
export default useForm;