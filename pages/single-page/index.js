import { colors } from "../../theme/theme";
export default function singlePage () {
    return (
        <>        
        <section className="section contetn-section">
            <div className="columns">
                <div className="column" />
                <div className="column is-three-quarters">
                <h1 className="title">Section</h1>
                <h2 className="subtitle">
                    A simple container to divide your page into <strong>sections</strong>, like the one youre currently
                    reading.
                </h2>
                </div>
                <div className="column" />
            </div>
        </section>

        <style jsx>{`
            .title {
                color: ${colors.secondary}
            }    
        `}
        </style>

        </>
    );
}