const Article: React.FC = () => {
    return (
        <article className="article">
            <div className="article__container">
                Компания <strong>СлонУм</strong> – проводит конкурс для детей в
                котором могут участвовать ребята <span>всех возрастов!</span>{" "}
                Номинации в которых можно победить, есть возможность проявить
                себя во всех направлениях и даже{" "}
                <span>без художественных способностей.</span>
            </div>
        </article>
    );
};

export default Article;
