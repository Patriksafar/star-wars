import * as styles from "./article.styles";

type Props = {
  description: string;
  title: string;
  rating: number;
  id: number;
};

export const Article = ({ description, title, rating, id }: Props) => {
  const handleEdit = () => {
    console.log("edit", id);
  };
  return (
    <article css={styles.card}>
      <div
        aria-label={`Hodnocení: ${rating} z 5`}
        aria-hidden="true"
        css={styles.rating}
        role="img"
      >
        Hodnocení: {rating} z&nbsp;5
      </div>
      <h2 css={styles.title}>{title}</h2>
      <p css={styles.description}>{description}</p>
      <p css={styles.actors}>Actors: Not implemented</p>
      <svg viewBox="0 0 16 16" css={styles.edit} onClick={handleEdit}>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.6339 0.499906C12.1457 0.0117505 11.3543 0.0117499 10.8661 0.499906L8.80806 2.55796L0.866117 10.4999C0.631696 10.7343 0.5 11.0523 0.5 11.3838V14.2499C0.5 14.9403 1.05964 15.4999 1.75 15.4999H4.61612C4.94764 15.4999 5.26558 15.3682 5.5 15.1338L15.5 5.13379C15.9882 4.64563 15.9882 3.85418 15.5 3.36602L12.6339 0.499906ZM13 5.86602L14.6161 4.24991L11.75 1.38379L10.1339 2.99991L13 5.86602ZM9.25 3.88379L12.1161 6.74991L4.61612 14.2499H1.75V11.3838L9.25 3.88379Z"
        />
      </svg>
    </article>
  );
};
