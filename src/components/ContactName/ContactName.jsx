const ContactName = ({ name }) => {
  console.log('props from name:', name);
  return <span>{name}: </span>;
};

export default ContactName;
