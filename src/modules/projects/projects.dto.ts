//esse e o arquivo de data transfer object de tipagem de request e response

import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class ProjectRequestDTO {
  @ApiProperty({ description: 'project name' })
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty({ description: 'project description', required: false })

  @IsString()
  description: string
}

export class ProjectListItemDTO {
  @ApiProperty()
  id: string

  @ApiProperty()
  name: string

  @ApiProperty()
  decription: string

  @ApiProperty({ format: 'data-time' })
  createAt: string

  @ApiProperty({ format: 'data-time' })
  updateAt: string
}
