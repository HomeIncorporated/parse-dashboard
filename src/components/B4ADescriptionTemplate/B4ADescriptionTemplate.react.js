/*
 * Copyright (c) 2016-present, Parse, LLC
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */
import Button from 'components/Button/Button.react';
import PropTypes    from 'lib/PropTypes';
import React        from 'react';
import styles       from 'components/B4ADescriptionTemplate/B4ADescriptionTemplate.scss';

const DESCRIPTION_LIMIT_OF_CHARACTERS = 240;

const openLink = (link, title) => {
  window.open(link, "_blank")
  if (back4AppNavigation && typeof back4AppNavigation.onClickAppTemplate === 'function')
    back4AppNavigation.onClickAppTemplate(title)
}

const truncateDescription = (text = '') => {
  if (text.length > DESCRIPTION_LIMIT_OF_CHARACTERS) {
    const lastSpaceInRange = text.indexOf(' ', DESCRIPTION_LIMIT_OF_CHARACTERS - 10);
    return text.substr(0, lastSpaceInRange).concat('...');
  } else {
    return text;
  }
}

let B4ADescriptionTemplate = (props) => {
  let padding = (props.padding || 20) + 'px';
  return (
    <div className={styles.description}
      style={{ padding: '0 ' + padding }}>
        <div className={styles.text}>{truncateDescription(props.description)}</div>
        <div className={styles.button}>
          <Button value={"Buy externally"} primary={true} color="green" onClick={openLink(props.link, props.title)}/>
        </div>
    </div>
  );
};

export default B4ADescriptionTemplate;


