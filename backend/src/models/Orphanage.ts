import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

import Image from './Image';
import User from './User';

@Entity('orphanages')
class Orphanege {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  orphanage_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'orphanage_id' })
  orphanage: User;

  @Column()
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  phone: string;

  @Column()
  about: string;

  @Column()
  instructions: string;

  @Column()
  opening_hours: string;

  @Column()
  open_on_weekends: boolean;

  @OneToMany(() => Image, image => image.orphanage, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'orphanage_id' })
  images: Image[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Orphanege;
