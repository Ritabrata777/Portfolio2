# NAFNet-SR

Restoration pipeline that rescues noisy, blurry semiconductor microscope images.

## Problem it solves

SEM frames blur and grain at high throughput. Re-scanning is costly. NAFNet-SR cleans and upscales what you already have.

## How it works

1. On-the-fly pipeline synthesizes blur, noise, and downsampling for training.
2. NAFNet learns denoising, deblurring, and 4x super-resolution jointly with Charbonnier loss and AMP.
3. Gradio app takes an upload and returns a restored frame with side-by-side compare.

## Tech stack

- Python, PyTorch CUDA, NAFNet
- OpenCV, NumPy, Pillow, Gradio

## Key features

- 34.30 dB PSNR vs 30.57 bicubic baseline
- Self-training without paired clean data
- One-click demo for fab engineers
- KLA Hackathon INCUBIT-KLA-PS01
