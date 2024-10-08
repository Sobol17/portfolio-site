'use client'
import { cn } from '@/lib/utils'
import { motion, stagger, useAnimate } from 'framer-motion'
import React, { useEffect } from 'react'

export const TextGenerateEffect = ({
	words,
	className,
}: {
	words: string
	className?: string
}) => {
	const [scope, animate] = useAnimate()
	let wordsArray = words.split(' ')
	useEffect(() => {
		console.log(wordsArray)
		animate(
			'span',
			{
				opacity: 1,
			},
			{
				duration: 2,
				delay: stagger(0.2),
			}
		)
	}, [scope.current])

	const renderWords = () => {
		return (
			<motion.div ref={scope}>
				{wordsArray.map((word, idx) => {
					return (
						<React.Fragment key={word + idx}>
							<motion.span
								className={` ${
									idx > 1 ? 'text-purple' : 'dark:text-white text-black'
								} opacity-0`}
							>
								{word}{' '}
							</motion.span>
							{idx === 1 && <br />}{' '}
							{/* Добавляем <br> после третьего элемента */}
						</React.Fragment>
					)
				})}
			</motion.div>
		)
	}

	return (
		<div className={cn('font-bold', className)}>
			{/* mt-4 to my-4 */}
			<div className='my-4'>
				{/* remove  text-2xl from the original */}
				<div className=' dark:text-white text-black leading-snug tracking-wide'>
					{renderWords()}
				</div>
			</div>
		</div>
	)
}
