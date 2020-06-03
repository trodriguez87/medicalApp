import { Test, TestingModule } from '@nestjs/testing';
import { MedicalEntityController } from './medical-entity.controller';

describe('MedicalEntity Controller', () => {
  let controller: MedicalEntityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicalEntityController],
    }).compile();

    controller = module.get<MedicalEntityController>(MedicalEntityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
