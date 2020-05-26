import { Test, TestingModule } from '@nestjs/testing';
import { MedicalCenterController } from './medical-center.controller';

describe('MedicalCenter Controller', () => {
  let controller: MedicalCenterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicalCenterController],
    }).compile();

    controller = module.get<MedicalCenterController>(MedicalCenterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
