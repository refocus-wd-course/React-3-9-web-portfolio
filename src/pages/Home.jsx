import nikola from '../assets/nikola-tesla.jpeg';

function Home() {
    return (
        <div className='home'>
            <div className='banner flex'>
                <img src={nikola} height='200' width='200' />
                <div className='flex-column'>
                    <h1>Nikola</h1>
                    <h1>Tesla</h1>
                </div>
            </div>
            <div className='summary'>
                <p>
                    Nikola Tesla was a Serbian-American inventor, electrical
                    engineer, mechanical engineer, and futurist who is best
                    known for his contributions to the design of the modern
                    alternating current (AC) electricity supply system. Tesla
                    started his career as an electrical engineer working for the
                    Continental Edison Company in Paris. He then moved to the
                    United States, where he worked for the inventor and
                    businessman Thomas Edison.
                    <br />
                    <br />
                    Despite his significant contributions to electrical
                    engineering and technology, Tesla struggled financially
                    throughout his life and died in relative obscurity in 1943.
                    However, his work and ideas continue to influence modern
                    technology and his legacy remains as one of the greatest
                    inventors in history.
                </p>
            </div>
        </div>
    );
}

export default Home;
