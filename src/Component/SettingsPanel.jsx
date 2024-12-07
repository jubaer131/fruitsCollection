import { MdExpandLess } from "react-icons/md";
import { TbCircleLetterT } from "react-icons/tb";
import { useFontSize } from "../ContextProvider/FontsizeProvider";

const SettingsPanel = () => {
    const { fontSize, handleFontSizeChange } = useFontSize();

    return (
        <div className="bg-white rounded-lg p-4 border-l">
            <div className="flex justify-between items-end pb-5">
                <h1 className="flex justify-between items-end gap-2">
                    <span className="text-xl"><TbCircleLetterT /></span>
                    <span>Settings</span>
                </h1>
                <span><MdExpandLess /></span>
            </div>
            <div>
                <div className="max-w-md mx-auto">
                    {/* Font Size Header */}
                    <div className="flex justify-between items-center mb-4">
                        <p className="">Paragraph Font Size</p>
                        <span className=" text-lg">{fontSize}</span>
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
                <label className="block text-sm mb-2">Chose vitamin type</label>
                <select
                    className="block w-full p-2 border rounded"

                >
                    <option value={12}>Small</option>
                    <option value={16}>Medium</option>
                    <option value={20}>Large</option>
                </select>
            </div>
            <div className="flex justify-between items-center pt-5">
                <h1>Turn off subtitle</h1>
                <input type="checkbox" value="synthwave" className="toggle theme-controller" />
            </div>
        </div>
    );
};

export default SettingsPanel;

