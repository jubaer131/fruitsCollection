
import { Outlet } from "react-router-dom";
// import { FaFacebook } from "react-icons/fa";
// import { GrLinkedinOption } from "react-icons/gr";
// import { FaInstagram } from "react-icons/fa";
// import { IoLogoTwitter } from "react-icons/io5";
// import { IoStar } from "react-icons/io5";
// import { IoIosStarOutline } from "react-icons/io";

const Context = () => {
    return (
        <main className="flex-1 ">
            {/* <section className="bg-white shadow-sm rounded-xl p-6 mb-6 flex justify-between">
                <div className="py-16 px-10 space-y-5">
                    <div className="w-8 h-8 rounded-full bg-[#2684fc] flex justify-center items-center">
                        <Link to="#"><FaFacebook className="text-xl text-white" /></Link>
                    </div>
                    <div className="w-8 h-8 rounded-full flex justify-center items-center bg-[#0a66c2]">
                        <Link to="#"><GrLinkedinOption className="text-xl text-white" /></Link>
                    </div>

                    <div className="w-8 h-8 rounded-full flex justify-center items-center bg-[#8dcff8]">
                        <Link to="#"><IoLogoTwitter className="text-xl text-white" /></Link>
                    </div>
                    <div className="w-8 h-8 rounded-full flex justify-center items-center bg-[#e55425]">
                        <Link to="#"><FaInstagram className="text-xl text-white" /></Link>
                    </div>
                </div>
                <div>
                    <div className="md:flex justify-between ">
                        <div className="w-1/2">
                            <h1 className="text-5xl font-bold mb-6">Health Benefits of an Avocado</h1>
                            <div className="pb-2">
                                <h3 className="text-xl font-bold my-1">Rich in Nutrients</h3>
                                <p>Mangoes are rich in essential nutrients that support overall health and well-being. They are an excellent source of vitamins, including vitamin C, which strengthens the immune system,  and healthy skin. </p>
                            </div>
                            <div className="pb-2">
                                <h3 className="text-xl font-bold my-1">Improves Eye Health</h3>
                                <p>Mangoes are rich in essential nutrients that support overall health and well-being. They are an excellent source of vitamins, including vitamin C, which strengthens the immune system,  and healthy skin. </p>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <img
                                src="https://i.ibb.co.com/0t3ynkR/orange-juicy-ripe-circle-citrus-1172-203.jpg"
                                alt="Avocado"
                                className=" rounded-md mb-4 h-80  float-right"
                            />
                        </div>
                    </div>
                    <div className="py-5">
                        <h1 className="text-xl font-bold pb-2">Natural Energy Booster</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo neque quae optio nihil pariatur fugiat labore voluptas ratione molestias velit omnis nobis enim, quibusdam quos. Dolores, corporis voluptates. Accusamus, eligendi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo neque quae optio nihil pariatur fugiat labore voluptas ratione molestias velit omnis nobis enim, quibusdam quos. Dolores, corporis voluptates. Accusamus, eligendi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo neque quae optio nihil pariatur fugiat labore voluptas ratione molestias velit omnis nobis enim, quibusdam quos. Dolores, corporis voluptates. Accusamus, eligendi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo neque quae optio nihil pariatur fugiat labore voluptas ratione molestias velit omnis nobis enim, quibusdam quos. Dolores, corporis voluptates. Accusamus, eligendi!</p>

                    </div>
                    <div className="md:flex justify-between ">
                        <div className="w-1/2">
                            <img
                                src="https://i.ibb.co.com/0t3ynkR/orange-juicy-ripe-circle-citrus-1172-203.jpg"
                                alt="Avocado"
                                className=" rounded-3xl mb-4 h-80  float-start "
                            />
                        </div>
                        <div className="w-1/2 py-16">
                            <h1 className="text-xl font-bold mb-2">Boosts Immunity</h1>
                            <h3>Rich in Nutrients</h3>
                            <p>Mangoes are a powerhouse of nutrients that provide numerous health benefits. They are rich in vitamin C, which boosts the immune system and helps maintain healthy skin. Packed with vitamin A, mangoes promote good vision and support skin health, while their high antioxidant content helps .</p>
                        </div>
                    </div>
                    <div className="py-8">
                        <h2 className="text-xl font-bold mb-2">Was this helpfull ?</h2>
                        <div className="flex gap-4 py-2">
                            <span><IoStar className="text-xl text-orange-600" /></span>
                            <span><IoStar className="text-xl text-orange-600" /></span>
                            <span><IoStar className="text-xl text-orange-600" /></span>
                            <span><IoStar className="text-xl text-orange-600" /></span>
                            <span><IoIosStarOutline className="text-xl text-orange-600" /></span>
                        </div>
                    </div>

                </div>


            </section> */}
            <Outlet></Outlet>
        </main>
    );
};

export default Context;
