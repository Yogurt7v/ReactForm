import { TextInput, Radio, PasswordInput } from "@mantine/core";
import { IconUser, IconLock, IconSend2 } from "@tabler/icons-react";

export function CustomInput(props) {
  switch (props.name) {
    case "nickname": {
      return (
        <TextInput
          className="form__input"
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          name={props.name}
          label={props.label}
          leftSection={<IconUser size={16} />}
        />
      );
    }

    case "radio": {
      return (
        <div className="form__input__radio">
          <Radio value="Men" name={props.name} label="Mужской" required />
          <Radio value="Women" name={props.name} label="Женский" required />
        </div>
      );
    }

    case "password": {
      return (
        <PasswordInput
          className="form__input"
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          name={props.name}
          label={props.label}
          leftSection={<IconLock size={16} />}
          required
        />
      );
    }

    default: {
      return (
        <TextInput
          className="form__input"
          type={props.type}
          placeholder={props.placeholder}
          name={props.name}
          label={props.label}
        />
      );
    }
  }
}
export default CustomInput;
