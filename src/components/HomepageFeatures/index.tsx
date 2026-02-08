import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  imgSrc?: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Liturgische Ressourcen',
    imgSrc: '/img/10.svg',
    description: (
      <>
        Umfassende Sammlung liturgischer Texte, Gebete und Anleitungen
        für Messfeiern, Stundengebet und besondere Anlässe. Alles an einem Ort.
      </>
    ),
  },
  {
    title: 'Gemeindeverwaltung',
    imgSrc: '/img/01.svg',
    description: (
      <>
        Werkzeuge zur Organisation und Verwaltung Ihrer Pfarrei:
        Kalender, Ministrantenpläne, Lektorendienste und mehr.
      </>
    ),
  },
  {
    title: 'Einfach & Zugänglich',
    imgSrc: '/img/11.svg',
    description: (
      <>
        Intuitiv bedienbar und auf allen Geräten verfügbar.
        Für Priester, Diakone, Pastoralreferenten und ehrenamtliche Mitarbeiter.
      </>
    ),
  },
];

function Feature({title, Svg, imgSrc, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {imgSrc ? (
          <img src={imgSrc} alt={title} className={styles.featureSvg} />
        ) : (
          Svg && <Svg className={styles.featureSvg} role="img" />
        )}
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