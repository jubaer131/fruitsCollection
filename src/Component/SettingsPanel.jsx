import { MdExpandLess } from "react-icons/md";
import { TbCircleLetterT } from "react-icons/tb";
import { useFontSize } from "../ContextProvider/FontsizeProvider";

const SettingsPanel = () => {
    const { fontSize, handleFontSizeChange } = useFontSize();

    return (
        <div className="bg-white rounded-lg p-4 ">
            <div className="border-2 border-gray-100 rounded-lg p-6">
                <div className="flex justify-between items-end pb-5">
                    <h1 className="flex justify-between items-end gap-2">
                        <span className="text-xl"><TbCircleLetterT className="text-2xl text-[#df7b6a]" /></span>
                        <span className="text-[#e87d6a]">Settings</span>
                    </h1>
                    <span><MdExpandLess className="text-2xl text-[#eb7f6c]" /></span>
                </div>
                <div>
                    <div className="max-w-md mx-auto">
                        {/* Font Size Header */}
                        <div className="flex justify-between items-center mb-4">
                            <p className="font-semibold">Paragraph Font Size</p>
                            <span className="text-[#eb7f6c] text-lg font-semibold">{fontSize}</span>
                        </div>

                        {/* Range Slider */}
                        <input
                            id="fontSize"
                            type="range"
                            min="10"
                            max="40"
                            value={fontSize}
                            onChange={handleFontSizeChange}
                            className="range w-full mb-6 focus:outline-none focus:ring-0"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm mb-2 font-semibold">Chose vitamin type</label>
                    <select
                        className="block w-full p-2  border rounded bg-slate-100 border-none"

                    >
                        <option >Vitamin A</option>
                        <option >Vitamin B</option>
                        <option >Vitamin C</option>
                        <option >Vitamin D</option>

                    </select>
                </div>
                <div className="flex justify-between items-center pt-5">
                    <h1 className="font-semibold">Turn off subtitle</h1>
                    <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                </div>
            </div>
        </div>
    );
};

export default SettingsPanel;

