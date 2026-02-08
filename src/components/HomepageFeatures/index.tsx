import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Liturgische Tools',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        OrdoServus bietet umfassende liturgische Hilfsmittel für die katholische Gemeinschaft,
        um Gottesdienste und Feiern zu unterstützen.
      </>
    ),
  },
  {
    title: 'Gemeinschaft und Zusammenarbeit',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Fördert die Zusammenarbeit innerhalb der katholischen Gemeinschaft durch
        gemeinsame Dokumentation und Wissensbasis.
      </>
    ),
  },
  {
    title: 'Benutzerfreundlich und Zugänglich',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Einfach zu bedienen und auf moderne Technologien basierend, um allen
        Mitgliedern der Gemeinschaft zugänglich zu sein.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
