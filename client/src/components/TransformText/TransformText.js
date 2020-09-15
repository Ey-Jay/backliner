import React from 'react';

const TransformText = ({ text }) => {
  return (
    <>
      {text.split('\n').map((line, key) => {
        return (
          <React.Fragment key={key}>
            {line}
            <br />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default TransformText;
