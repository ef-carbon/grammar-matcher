import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './IntroPage.scss';

const samples = ['If I save my money, I can buy an electric car next year.'];

const IntroPage = ({ history }) => {
  let input;

  const onSubmit = (evt) => {
    evt.preventDefault();
    const query = encodeURIComponent(input.value.replace(/\s+/gi, ''));
    const url = query ? `/query/${query}` : '/';
    history.push(url);
  };

  return (
    <div className={classes.introOuterContainer}>
      <div className={classes.introContainer}>
        <h1 className={classes.header}>EF Hello Grammar Matcher Demo</h1>
        <p className={classes.introDescription}>
          Enter a sentence below and we&apos;ll detect the grammar rules.
        </p>
        <form className={classes.sentenceInputContainer} onSubmit={onSubmit}>
          <input className="form-control" ref={(ref) => (input = ref)} />
          <button type="submit" className="btn btn-primary">
            Go
          </button>
        </form>
        <div className={classes.samples}>
          <span>Need inspiration? Try a sample sentence:</span>
          {samples.map((sample) => (
            <div key={sample} className={classes.sample}>
              <Link to={`/query/${sample}`}>{sample}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

IntroPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.function,
  }).isRequired,
};

export default IntroPage;
