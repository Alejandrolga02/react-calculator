import { IconContext } from 'react-icons';
import { 
	RiNumber0, 
	RiNumber1, 
	RiNumber2, 
	RiNumber3, 
	RiNumber4, 
	RiNumber5, 
	RiNumber6, 
	RiNumber7, 
	RiNumber8, 
	RiNumber9,
	FaMinus,
	FaDivide,
	FaTimes,
	FaEquals,
	FaPlus,
	TbLetterC,
	BsBackspace
} from 'react-icons/all';

import { NumberButton } from "./NumberButton";
import { ClearButton } from "./ClearButton";
import { BackspaceButton } from "./BackspaceButton";
import { ResultBox } from './ResultBox';

import './styles.css';

export const CalculatorApp = () => {
	return (
		<IconContext.Provider value={{ className: "m-0 text-white" }}>
			<div className="bg-cyan-900 p-4 rounded-xl shadow-2xl grid gap-2 grid-cols-4 w-11/12 max-w-xl aspect-[2/1]">
				<ResultBox />

				<ClearButton  icon={<TbLetterC />}/>
				<ClearButton  icon={<FaDivide />}/>
				<BackspaceButton  icon={<BsBackspace />}/>
				<ClearButton  icon={<FaEquals />}/>

				<NumberButton value={7} icon={<RiNumber7 />}/>
				<NumberButton value={8} icon={<RiNumber8 />}/>
				<NumberButton value={9} icon={<RiNumber9 />}/>
				<ClearButton  icon={<FaTimes />}/>

				<NumberButton value={4} icon={<RiNumber4 />}/>
				<NumberButton value={5} icon={<RiNumber5 />}/>
				<NumberButton value={6} icon={<RiNumber6 />}/>
				<ClearButton  icon={<FaMinus />}/>

				<NumberButton value={1} icon={<RiNumber1 />}/>
				<NumberButton value={2} icon={<RiNumber2 />}/>
				<NumberButton value={3} icon={<RiNumber3 />}/>
				<ClearButton  icon={<FaPlus />}/>

				<NumberButton value={0} icon={<RiNumber0 />}/>
			</div>
		</IconContext.Provider>
	);
};
