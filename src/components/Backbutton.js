import { useHistory } from "react-router-dom";

const Backbutton = ({prevProductState, handleProductState}) => {
  
  let history = useHistory();

  // const clickHandler = () => {
  //   handleProductState(prevProductState);
  //   history.goBack()
  // }

  return (
    <div className="backbutton" onClick={() => history.goBack()}></div>
  )
}

export default Backbutton;

