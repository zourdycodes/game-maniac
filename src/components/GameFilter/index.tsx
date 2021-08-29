import React, { ChangeEvent } from 'react'
import { Form, Label, Select } from './styles/GameFilter'
import { PLATFORMS, GENRES, SORT_BY, TAGS } from './constants'

interface Props {
	onChange: (e: ChangeEvent<HTMLFormElement>) => void
}

export const GameFilter: React.FC<Props> = ({ onChange }: Props) => {
	return (
		<Form onChange={onChange}>
			<Label htmlFor="platform-select">
				Platforms:
				<Select name="platform" id="platform-select">
					{PLATFORMS?.map(platform => {
						return (
							<option key={platform.value} value={platform.value}>
								{platform.display}
							</option>
						)
					})}
				</Select>
			</Label>
			<Label htmlFor="genre-select">
				Genres:
				<Select name="genre" id="genre-select">
					{GENRES?.map(genre => {
						return (
							<option key={genre.value} value={genre.value}>
								{genre.display}
							</option>
						)
					})}
				</Select>
			</Label>
			<Label htmlFor="tags-select">
				Tags:
				<Select name="tags" id="tags-select">
					{TAGS?.map(tags => {
						return (
							<option key={tags.value} value={tags.value}>
								{tags.display}
							</option>
						)
					})}
				</Select>
			</Label>
			<Label htmlFor="sortBy-select">
				<span>Sort</span>
				By:
				<Select name="sortBy" id="sortBy-select">
					{SORT_BY?.map(sortBy => {
						return (
							<option key={sortBy.value} value={sortBy.value}>
								{sortBy.display}
							</option>
						)
					})}
				</Select>
			</Label>
		</Form>
	)
}
