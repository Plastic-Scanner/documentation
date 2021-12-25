import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'What is the Plastic Scanner',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        The Plastic Scanner is a device which can identify the most common plastics.
      </>
    ),
  },
  {
    title: 'How to help out',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        This site is made to give you information, if you want to help out, check the issues on the github repo.
      </>
    ),
  },
  {
    title: 'Making the world a bit better',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The goal of the plastic scanner is to make the world a tiny bit better!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
