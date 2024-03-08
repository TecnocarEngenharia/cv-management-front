import * as C from "./style";
import IconLupa from "../../image/icon_lupa.svg";
import User_Sum from "../../image/user_sum.svg";
import { useState } from "react";
import { ModalUser } from "../modalUser";

const InputSearch = ({ onSearch } : any) => {
  const [newUser, setNewUser] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const toggleModal = () => {
    setNewUser(!newUser);
  };

  const handleSearch = () => {
    onSearch(searchValue);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value.trim() === "") {
      onSearch("");
    }
  };

  return (
    <C.Container>
      <C.ContainerSearch>
        <C.ContentInput
          type="text"
          placeholder="Pesquisar"
          value={searchValue}
          onChange={handleChange} 
        />
        <C.ContentImage src={IconLupa} alt="" onClick={handleSearch}/>
        <C.ContentButton onClick={toggleModal}>
          <img src={User_Sum} alt="icone de adicionar usuário" />
        </C.ContentButton>
      </C.ContainerSearch>
      {newUser && <ModalUser onclose={toggleModal} />}
    </C.Container>
  );
};

export { InputSearch}