import styles from '../pages/audiojourney.module.scss';
import {ContentProps} from '../utils/interfaces';

export default function Content({content, index}: ContentProps) {
  return (
    <section className={styles.container}>
      <div className={styles.infoarea}>
        {content.map((chapter) => (
          <p key={chapter.id}>{chapter.copy}</p>
        ))}
      </div>
      <div className={styles.chapter}>
        {content.map((chapter) => (
          <p key={chapter.id}>{chapter.id}</p>
        ))}
      </div>
      <div className={styles.contact}>
        <a href="">CONTACT ME</a>
      </div>
    </section>
  );
}
