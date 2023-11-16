import React, { useEffect, useRef, useState } from 'react';

import Modal from "@components/common/Modal";

import { ProgressBarItem } from "@/app/views/CraftingPlanPage";

import { useModal } from "@/app/context/loader";

import "./index.scss"

type ProgressProps = {
	item: ProgressBarItem,
	setNextItemStart: (index: number) => void;
	index: number
	updateProgress: (id: number) => void }

const Progress:React.FC<ProgressProps> = ({  updateProgress , item ,index,setNextItemStart}) => {

	const [isProgressStarted, setIsProgressStarted] = useState<boolean>(false);

	const {openModal, closeModal} = useModal();

	const intervalRef = useRef<NodeJS.Timer>();

	const handleOpen = () => {
		setIsProgressStarted(true)
		closeModal()

	}

	useEffect(() => {
		if (index === item.id) {
			setIsProgressStarted(item.start)
		}
	}, [item.id, item.start ,index]);


	useEffect(() => {

		if (isProgressStarted) {
				intervalRef.current = setInterval(() => updateProgress(item.id), 50);
		}
		else clearInterval(intervalRef.current)

	},[isProgressStarted, item.id])

	useEffect(() => {
		if (item.progress === 100) {
			setIsProgressStarted(false)
			setNextItemStart(index + 1)
		}

		if (item.breakpoints === item.progress) {
			setIsProgressStarted(false)
			openModal(<Modal title={item.modalTitle} handleClick={handleOpen}/>)
		}

	}, [item.progress]);


	return (
	<div>
		<div className="bar-container">
			<span className="bar-container__description">{item.barTitle}</span>
			<div className="bar-container__procent">{item.progress}%</div>
		</div>
		<div className="progress">
			<div className="progress__bar" style={{ width: `${item.progress}%` }}></div>
		</div>
	</div>
	);
};

export default Progress;
