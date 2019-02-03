import { Collection, Entity, ManyToMany, PrimaryKey, Property } from '../../lib';
import { Book2 } from './Book2';
import { BaseEntity2 } from './BaseEntity2';

@Entity()
export class BookTag2 extends BaseEntity2 {

  @PrimaryKey()
  id: number;

  @Property()
  name: string;

  @ManyToMany({ entity: () => Book2.name, mappedBy: 'tags' })
  books: Collection<Book2>;

  constructor(name: string) {
    super();
    this.name = name;
  }

}