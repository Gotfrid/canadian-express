import type { FC } from "react";
import Select from "react-select";

interface Props {
  value: DrawName;
  setValue: (val: DrawName) => void;
}

const ProgramSelect: FC<Props> = ({ value, setValue }) => {
  const selectOptions: { value: DrawName; label: DrawName }[] = [
    { value: "No Program Specified", label: "No Program Specified" },
    { value: "Provincial Nominee Program", label: "Provincial Nominee Program" },
    { value: "Federal Skilled Worker", label: "Federal Skilled Worker" },
    { value: "Federal Skilled Trades", label: "Federal Skilled Trades" },
    { value: "Canadian Experience Class", label: "Canadian Experience Class" },
  ];
  return <Select value={{ value, label: value }} onChange={(val) => setValue(val!.value)} options={selectOptions} />;
};

export default ProgramSelect;
