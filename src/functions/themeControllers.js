import React from "react";
import { useEffect, useState } from "react";
import { Cell, Switch, Spinner } from "@vkontakte/vkui";
import { Icon28MoonOutline } from "@vkontakte/icons";

let isDarkScheme = false

function ThemeControllers() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1);
  }, []);

  function changeScheme() {
    let schemeAttribute = document.createAttribute('scheme');
    isDarkScheme = !isDarkScheme
    schemeAttribute.value = isDarkScheme ? 'space_gray' : 'space_light'
    document.body.attributes.setNamedItem(schemeAttribute)
  }

  return (
    <Cell
      disabled
      before={
        <Icon28MoonOutline width={24} height={24} />
      }
      after={
        loaded ? (
          <Switch
            onChange={() => changeScheme()}
            aria-label="Тёмная тема"
          />
        ) : (
          <Spinner size="regular" />
        )
      }
    >
      Темная тема
    </Cell>
  );
};

export default ThemeControllers;