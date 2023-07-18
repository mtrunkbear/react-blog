import { useState, useEffect } from "react";
import { Input as ChakraInput, Textarea, forwardRef } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { PostButton } from "./Buttons";
import { simpleStringRegex, urlRegex } from "../utils/regex";
import { updateUser } from "../api/usersAPI";
import { useAlertContext } from "../context/AlertContext";
interface UserData{
id: string;
nickName: string;
firstName: string;
lastName: string;
occupation: string;
description: string;
avatarUrl: URL;
}
const EditForm = ( userData:UserData ) => {
  const { showAlert }:any = useAlertContext();
  const [validation, setValidation] = useState({});
  const [formData, setFormData] = useState({
    id: userData?.id,
    nickName: userData?.nickName,
    firstName: userData?.firstName,
    lastName: userData?.lastName,
    occupation: userData?.occupation,
    description: userData?.description,
    avatarUrl: userData?.avatarUrl,
  } as any);

  useEffect(() => {
    setFormData(userData);
  }, [userData]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isInvalid = handleValidation(formData);
    if (!isInvalid) {
      updateUser(formData);
      showAlert("Datos modificados con exito!", "success");
    }
  };
  const handleValidation = (data: any) => {
    const simpleValidation = (value: any) => {
      return !(
        4 <= data[value]?.length &&
        data[value]?.length < 20 &&
        simpleStringRegex.test(data[value])
      );
    };

    const validationData = {
      nickName: simpleValidation("nickName"),
      firstName: simpleValidation("firstName"),
      lastName: simpleValidation("lastName"),
      occupation: simpleValidation("occupation"),
      avatarUrl: !urlRegex.test(data["avatarUrl"]),
    };
    setValidation(validationData);
    const isInvalid = !Object.values(validationData).every(
      (value) => value == false
    );
    return isInvalid;
  };
  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const data = { ...formData, [event.target.name]: event.target.value };
    setFormData(data);
  };

  const formStructure = [
    { label: "Nickname", key: "nickName" },
    { label: "Nombre", key: "firstName" },
    { label: "Apellido", key: "lastName" },
    { label: "Ocupación/Afición", key: "occupation" },
    {
      label: "Url de imagen para Avatar",
      key: "avatarUrl",
      validationErrorMessage: "Debe ingresar un URL de imagen valido",
    },
  ];
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormInputsMapper
          from={0}
          to={3}
          structure={formStructure}
          userData={userData}
          formData={FormData}
          handleChange={handleChange}
          validation={validation}
        />
        <FormGroup>
          <Label>Description</Label>
          <Textarea
            name="description"
            rows={4}
            bg="black"
            placeholder={"Tell us more about you"}
            focusBorderColor="green.300"
            value={formData.description}
            onChange={handleChange}
            width={"-webkit-fill-available"}
          />
        </FormGroup>
        <PostButton style={{ position: "relative" }} type="submit">
          Guardar
        </PostButton>
      </form>
    </FormContainer>
  );
};

export default EditForm;

const FormInputsMapper = ({
  structure,
  userData,
  formData,
  handleChange,
  validation,
}: any) => {
  return (
    <>
      {structure.map(({ label, type, key, validationErrorMessage }: any) => (
        <FormGroup key={key}>
          <Label>{label}</Label>
          <Input
            isInvalid={validation[key]}
            type={type || "text"}
            name={key}
            errorBorderColor="red.300"
            value={formData[key]}
            placeholder={userData[key]}
            onChange={handleChange}
          />
          {validation[key] && (
            <P>
              {" "}
              {validationErrorMessage
                ? validationErrorMessage
                : `Debe ingresar un ${label.toLowerCase()} valido`}
            </P>
          )}
        </FormGroup>
      ))}
    </>
  );
};

const FormContainer = styled.div`
  width: 80%;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  justify-items: start;
  align-items: start;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;
const P = styled.p`
  color: red;
`;

const Input = forwardRef(
  (
    {
      className,
      style,
      key,
      placeholder,
      onChange,
      value,
      type,
      name,
      isInvalid,
    }: any,
    ref: any
  ) => {
    return (
      <ChakraInput
        isInvalid={isInvalid}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        bg="black"
        height={"28px"}
        placeholder={placeholder}
        focusBorderColor="green.300"
        key={key}
        className={className}
        ref={ref}
        style={style}
        width={"-webkit-fill-available"}
      />
    );
  }
);
