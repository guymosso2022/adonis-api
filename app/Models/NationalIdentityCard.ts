import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class NationalIdentityCard extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public first_name: String;

  @column()
  public last_name: String;

  @column()
  public email: String;

  @column()
  public code: String;

  @column()
  public birth_date: String;

  @column()
  public birth_place: String;

  @column()
  public sex: String;

  @column()
  public nationality: String;

  @column()
  public expiration_date: String;

  @column()
  public job: String;

  @column()
  public place_of_issue: String;

  @column()
  public date_of_issue: String;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
