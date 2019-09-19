import React, { useState } from "react";
import APIHandler from "../../../Api/ApiHandler";
import classes from "../form.css";
import CompTitle from "../Composants/TitleForm/CompTitleForm";
import Input from "../Composants/Input/InputForm";
import Select from "../Composants/Input/SelectForm";
import AddCompButton from "../Composants/Buttons/AddContentButton";
import CancelButton from "../Composants/Buttons/CancelButton";
import Button from "../Composants/Buttons/Button";

const apiHandler = new APIHandler();
const DrinkForm = props => {
  const [drinkInfos, setDrinkInfos] = useState({
    organizer: props.location.state.pageId
  });
  const [formArray, setFormArray] = useState([]);

  const handlePost = async evt => {
    evt.preventDefault();
    const drinkObj = {
      organizer: drinkInfos.organizer,
      name: drinkInfos.name,
      price: toNumber(drinkInfos.price),
      category: drinkInfos.category
    };
    try {
      const dbRes = await apiHandler.post("/api/drinks", drinkObj);
      console.log(dbRes.data.organizer);
      props.history.replace(
        `/details/organizers/${dbRes.data.organizer.slug}/${getId(props)}`
      );
    } catch (err) {
      console.log(err.response);
    }
  };

  const handleInput = evt => {
    evt.preventDefault();
    setDrinkInfos({
      ...drinkInfos,
      [evt.target.name]: evt.target.value
    });
  };

  const toNumber = n => {
    return parseInt(n);
  };

  const getId = infos => {
    return infos.location.state.pageId.split("").pop();
  };

  const addForm = form => {
    formArray.push(form);
    setFormArray(formArray);
  };

  const removeForm = () => {
    if (formArray.length > 0) formArray.pop();
    setFormArray(formArray);
  };
  const newForm = (
    <div className={classes.formItselft}>
      <form onSubmit={handlePost} onChange={handleInput}>
        <Input text="Nom de la boisson*" type="text" name="name" />
        <Input text="Prix (€)*" type="number" name="price" />
        <Select
          text="
            Type de boisson*"
          type="submit"
          name="category"
          option={[
            "-- Choisir une catégorie --",
            "beer-medium",
            "beer-large",
            "wine",
            "champagne",
            "cocktail",
            "shooter",
            "soft"
          ]}
          display={[
            "-- Choisir une catégorie --",
            "Bière (demi - 25 cl)",
            "Bière (pinte - 50 cl)",
            "Vin",
            "Champagne",
            "Cocktail",
            "Shooter",
            "Soft"
          ]}
        />
        <Button text="submit" />
      </form>
    </div>
  );

  return (
    <div className={classes.form}>
      <CompTitle name={props.location.state.name} text="boissons" />
      {newForm}
      {formArray.map(oneEl => {
        return oneEl;
      })}
      <CancelButton removeForm={removeForm} />
      <AddCompButton
        text="autre boisson"
        addAForm={addForm}
        newForm={newForm}
      />
    </div>
  );
};

export default DrinkForm;
