# The example function below keeps track of the opponent's history and plays whatever the opponent played two plays ago. It is not a very good player so you will need to change the code to pass the challenge.

import numpy
import math
import tensorflow
from tensorflow import keras

#isModelCreated = False
#model = None

def player(prev_play, opponent_history = []):
	if prev_play:
		opponent_history.append(prev_play)
	guess = "R"
	if len(opponent_history) > 2:
		guess = opponent_history[-2]
	#print(opponent_history)
	
	return guess

def rnnPlayer(prev_play, opponent_history = []):
	MIN_VECTOR_LENGTH = 100
	STEP_SIZE = 20
	TRAIN_PERCENTAGE = 0.7
	VALID_PERCENTAGE = 0.2
	TEST_PERCENTAGE = 0.1

	if prev_play:
		opponent_history.append(prev_play)
	prediction = "S"

	X_train = []
	y_train = []
	X_valid = []
	y_valid = []
	X_new = []
    
	if 'isModelCreated' in globals():
		pass
	else:
		global isModelCreated
		isModelCreated = False
        
	if 'model' in globals():
		pass
	else:
		global model
		model = None
        
	if len(opponent_history) >= MIN_VECTOR_LENGTH:
		if not isModelCreated:
			#X_full = convertPlays(opponent_history)
			#index = math.floor(len(X_full) * TRAIN_PERCENTAGE)
			#X_train, y_train = X_full[:index], X_full[1 : index + 1]
			#X_valid, y_valid = X_full[index : len(X_full) - 1], X_full[index + 1:]
			X_full = convertPlays(opponent_history)
			index = math.floor(len(X_full) * TRAIN_PERCENTAGE)
			X_full = generateSeries(X_full, STEP_SIZE)
			X_train, y_train = X_full[:index, :STEP_SIZE], X_full[:index, -1]
			X_valid, y_valid = X_full[index:, :STEP_SIZE], X_full[index:, -1]
			print(numpy.shape(X_train))
			model = keras.models.Sequential()
			model.add(keras.layers.SimpleRNN(3,
						     return_sequences = True,
						     input_shape = [None, 3]))                                           
			model.add(keras.layers.SimpleRNN(3))
			model.add(keras.layers.Dense(3))
			model.compile(loss = "mean_squared_error",
				  optimizer = "sgd")
			history = model.fit(X_train,
					y_train,
					epochs = 30,
					validation_data = (X_valid, y_valid))
			isModelCreated = True
			#prediction = model.predict(X_new)
		X_new = generateSingleton(X_full, STEP_SIZE)
		#X_new = X_new[:, :STEP_SIZE]            
		prediction = model.predict(X_new[:, 0, 0])
		print(prediction)
	else:
		if len(opponent_history) > 2:
			prediction = opponent_history[-2]
			prediction = vectorizePlay(prediction)
		else:
			prediction = "S"
			prediction = vectorizePlay(prediction)
	prediction = scalarizePlay(prediction)

	if prediction == "R":
		guess = "P"
	elif prediction == "P":
		guess = "S"
	else:
		guess = "R"
		
	return guess

def convertPlays(plays):
	output = []
	for play in plays:
		output.append(vectorizePlay(play))
		
	return output
	
def generateSeries(inputVector, stepSize):
	series = []
	count = len(inputVector)
	if stepSize < count:
		for i in range(0, count - stepSize + 1):         
			series.append(inputVector[i : stepSize + i])
	output = numpy.array(series)
	output = output[..., numpy.newaxis].astype('int')
	return output

def generateSingleton(inputVector, stepSize):
	series = []
	count = len(inputVector)
	series.append(inputVector[count - stepSize - 1 : count - 1])
	output = numpy.array(series)
	output = output[..., numpy.newaxis].astype('int')
	return output

def scalarizePlay(play):
	output = ""
	if play == [1, 0, 0]:
		output = "R"
	elif play == [0, 1, 0]:
		output = "P"
	elif play == [0, 0, 1]:
		output = "S"
		
	return output

def vectorizePlay(play):
	# [R, P, S]
	output = [0, 0, 0]
	if play == "R":
		output = [1, 0, 0]
	elif play == "P":
		output = [0, 1, 0]
	elif play == "S":
		output = [0, 0, 1]
		
	return output
