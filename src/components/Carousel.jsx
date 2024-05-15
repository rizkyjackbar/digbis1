import Slide from './Slide';

const Carousel = () => {
    return (
        <div className="carousel relative container mx-auto" style={{ maxWidth: '1600px' }}>
            <div className="carousel-inner relative overflow-hidden w-full">
                {/* Slide 1 */}
                <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden defaultChecked />
                <Slide
                    imageUrl="https://images.unsplash.com/photo-1606836576983-8b458e75221d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D"
                    text={<span><span style={{ color: 'white' }}>Harmoni antara</span> warisan kuliner tradisional Indonesia <span style={{ color: 'white' }}>dengan nuansa</span> modern yang elegan.</span>}
                />

                {/* Slide 2 */}
                <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden />
                <Slide
                    imageUrl="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    text={<span><span style={{ color: 'white' }}>Ditangani oleh lulusan</span> koki terbaik dunia..</span>}
                />

                {/* Slide 3 */}
                <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden />
                <Slide
                    imageUrl="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    text="Memastikan bahwa setiap kunjungan ke Nusaena Resto menjadi pengalaman yang istimewa dan berkesan."
                />

                {/* Indicators */}
                <ol className="carousel-indicators">
                    <li className="inline-block mr-3">
                        <label htmlFor="carousel-1" className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900">•</label>
                    </li>
                    <li className="inline-block mr-3">
                        <label htmlFor="carousel-2" className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900">•</label>
                    </li>
                    <li className="inline-block mr-3">
                        <label htmlFor="carousel-3" className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900">•</label>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Carousel;
