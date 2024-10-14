import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import ContactItem from "./ContactItem";

const ContactList = () => {
  const [filteredList, setFilteredList] = useState([]);
  const contactList = useSelector((state) => state.contactList);
  const keyword = useSelector((state) => state.keyword);
  // console.log(contactList, keyword);

  useEffect(() => {
    if (keyword !== "") {
      const list = contactList.filter((item) => item.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [keyword]);
  return (
    <>
      <h6>Friends List</h6>
      <SearchBar />
      {filteredList.map((item, index) => (
        <ContactItem key={index} item={item} />
      ))}
    </>
  );
};

export default ContactList;
