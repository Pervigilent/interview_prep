# Cell No. 1
try:
  # This command only in Colab.
  %tensorflow_version 2.x
except Exception:
  pass
import tensorflow as tf

from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Conv2D, Flatten, Dropout, MaxPooling2D
from tensorflow.keras.preprocessing.image import ImageDataGenerator

# Cell No. 2
# Get project files
!wget https://cdn.freecodecamp.org/project-data/cats-and-dogs/cats_and_dogs.zip

!unzip cats_and_dogs.zip

PATH = 'cats_and_dogs'

train_dir = os.path.join(PATH, 'train')
validation_dir = os.path.join(PATH, 'validation')
test_dir = os.path.join(PATH, 'test')

# Get number of files in each directory. The train and validation directories
# each have the subdirecories "dogs" and "cats".
total_train = sum([len(files) for r, d, files in os.walk(train_dir)])
total_val = sum([len(files) for r, d, files in os.walk(validation_dir)])
total_test = len(os.listdir(test_dir))

# Variables for pre-processing and training.
batch_size = 128
epochs = 15
IMG_HEIGHT = 150

# Cell No. 3
train_image_generator = ImageDataGenerator(rescale = 1. / 255.)
validation_image_generator = ImageDataGenerator(rescale = 1. / 255.)
test_image_generator = ImageDataGenerator(rescale = 1. / 255.)

train_data_gen = train_image_generator.flow_from_directory(directory = train_dir,
                                                           class_mode = "categorical",
                                                           target_size = (IMG_HEIGTH, IMG_WIDTH),
                                                           batch_size = batch_size)
val_data_gen = validation_image_generator.flow_from_directory(directory = validation_dir,
                                                              class_mode = "categorical",
                                                              target_size = (IMG_HEIGTH, IMG_WIDTH),
                                                              batch_size = batch_size)
test_data_gen = test_image_generator.flow_from_directory(directory = test_dir,
                                                         class_mode = "categorical",
                                                         target_size = (IMG_HEIGTH, IMG_WIDTH),
                                                         batch_size = batch_size,
                                                         shuffle = False)

# Cell No. 4
def plotImages(images_arr, probabilities = False):
    fig, axes = plt.subplots(len(images_arr), 1, figsize=(5,len(images_arr) * 3))
    if probabilities is False:
      for img, ax in zip( images_arr, axes):
          ax.imshow(img)
          ax.axis('off')
    else:
      for img, probability, ax in zip( images_arr, probabilities, axes):
          ax.imshow(img)
          ax.axis('off')
          if probability > 0.5:
              ax.set_title("%.2f" % (probability*100) + "% dog")
          else:
              ax.set_title("%.2f" % ((1-probability)*100) + "% cat")
    plt.show()

sample_training_images, _ = next(train_data_gen)
plotImages(sample_training_images[:5])



