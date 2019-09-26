import React, { useState } from "react";
import APIHandler from "../../../Api/ApiHandler";
import classes from "../form.css";
import CompTitle from "../Composants/TitleForm/CompTitleForm";
import Input from "../Composants/Input/InputForm";
import Select from "../Composants/Input/SelectForm";
import AddContentButton from "../Composants/Buttons/AddContentButton";
import Button from "../Composants/Buttons/Button";

const apiHandler = new APIHandler();

const DrinkForm = props => {
  const [drinkInfos, setDrinkInfos] = useState({
    organizer: props.location.state.pageId
  });

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
      console.log(dbRes);
      props.history.replace(
        `/details/organizers/${dbRes.data.organizer.slug}/${getId(
          drinkInfos.organizer
        )}`
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
    return parseInt(infos.match(/\d+/g));
  };

  return (
    <div className={classes.form}>
      <CompTitle name={props.location.state.name} text="boissons" />
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
        <div style={{ borderTop: "1px solid grey", marginTop: "10px" }}>
          <AddContentButton text="autre boisson" />
        </div>
      </form>
    </div>
  );
};

export default DrinkForm;
