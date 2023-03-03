import styled from "styled-components";
import { Sun, Moon } from "react-feather";
import { useTheme } from "utils/provider";
import { handleTheme } from "utils/functions/handleTheme";
import { sizes, themes } from "utils/variables";

export default function ThemeSwitch({ xl, lg, md, sm, xs }) {
  const { theme, setTheme } = useTheme();

  //Handle Enter Key on Tab Navigation
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleTheme(theme, setTheme);
    }
  };

  return (
    <Switch
      xl={xl}
      lg={lg}
      md={md}
      sm={sm}
      xs={xs}
      theme={theme}
      themes={themes}
      onClick={() => handleTheme(theme, setTheme)}
      tabIndex="0"
      onKeyDown={(e) => handleKeyDown(e)}
    >
      <Toggle theme={theme} themes={themes}>
        {theme == "dark" ? <Sun size={16} /> : <Moon size={16} />}
      </Toggle>
    </Switch>
  );
}

const Switch = styled.div`
  width: 50px;
  height: 25px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 2px solid white;

  ${({ xl }) => xl};

  @media (max-width: ${sizes.lg}) {
    ${({ lg }) => lg};
  }

  @media (max-width: ${sizes.md}) {
    ${({ md }) => md};
  }

  @media (max-width: ${sizes.sm}) {
    ${({ sm }) => sm};
  }

  @media (max-width: ${sizes.xs}) {
    ${({ xs }) => xs};
  }
`;

const Toggle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s ease;
  font-weight: 600;
  transform: ${(props) =>
    props.theme == "default" ? "translate(-5px)" : "translate(25px)"};
  background: white;
  color: #222;
`;
