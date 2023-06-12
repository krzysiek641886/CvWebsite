function PositionPrinter(params) {
    return (
        <div className="position-content">
            <h3 className="position-title-text">{params.position_title}</h3>
            <a className="hyperlink" href={params.link}>{params.institution_name}</a>
            <p className="time-period-text">{params.time_period}</p>
            <p className="position-description-text">{params.description}</p>
        </div>
    );
}

export default PositionPrinter;
