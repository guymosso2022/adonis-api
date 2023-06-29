import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import NationalIdentityCard from "App/Models/NationalIdentityCard";

export default class NationalIdentityCardsController {
  public async index({}: HttpContextContract) {
    const nationalIdentityCard = await NationalIdentityCard.all();
    return nationalIdentityCard;
  }

  public async create({ request, response }: HttpContextContract) {
    NationalIdentityCard.create({
      first_name: request.input("first_name"),
      last_name: request.input("last_name"),
      email: request.input("email"),
      code: request.input("code"),
      birth_date: request.input("birth_date"),
      birth_place: request.input("birth_place"),
      sex: request.input("sex"),
      nationality: request.input("nationality"),
      expiration_date: request.input("expiration_date"),
      job: request.input("job"),
      place_of_issue: request.input("place_of_issue"),
      date_of_issue: request.input("date_of_issue"),
    });
    return response.status(201).json({ created: true });
  }

  public async store({}: HttpContextContract) {}

  public async show({ response, params }: HttpContextContract) {
    const nationalIdentityCard = await NationalIdentityCard.findOrFail(
      params.id
    );
    return response.status(200).send(nationalIdentityCard);
  }

  public async edit({ request, response, params }: HttpContextContract) {
    const nationalIdentityCard = await NationalIdentityCard.findOrFail(
      params.id
    );
    (nationalIdentityCard.first_name = request.input("first_name")),
      (nationalIdentityCard.last_name = request.input("last_name")),
      (nationalIdentityCard.email = request.input("email")),
      (nationalIdentityCard.birth_date = request.input("birth_date")),
      (nationalIdentityCard.birth_place = request.input("birth_place")),
      (nationalIdentityCard.sex = request.input("sex")),
      (nationalIdentityCard.nationality = request.input("nationality")),
      (nationalIdentityCard.expiration_date = request.input("expiration_date")),
      (nationalIdentityCard.job = request.input("job")),
      (nationalIdentityCard.place_of_issue = request.input("place_of_issue")),
      (nationalIdentityCard.date_of_issue = request.input("date_of_issue")),
      nationalIdentityCard.save();
    return response.status(200).send(nationalIdentityCard);
  }

  public async update({}: HttpContextContract) {}

  public async destroy({ response, params }: HttpContextContract) {
    const nationalIdentityCard = await NationalIdentityCard.findOrFail(
      params.id
    );
    console.log("nationalIdentityCard", nationalIdentityCard);

    await nationalIdentityCard.delete();
    return nationalIdentityCard;
  }
}
