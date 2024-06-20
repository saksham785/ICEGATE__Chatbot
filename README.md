## ICEGATE_Chatbot
# Purpose

The ICEGATE Chatbot is designed to assist users with queries related to the ICEGATE website. It provides information on various topics related to ICEGATE website. 

My chatbot can understand the question even if you made a spelling mistake, grammetical error, or change the sequence of words.

# Features

I have used RASA framework to create this chatbot, 

Robust NLU Pipeline: Utilizes a combination of SpacyTokenizer, SpacyFeaturizer, RegexFeaturizer, LexicalSyntacticFeaturizer, and CountVectorsFeaturizer for accurate intent recognition and entity extraction.

Advanced Classification: Uses the DIETClassifier for improved intent classification and entity recognition.

Synonym Mapping: Ensures consistent entity recognition using the EntitySynonymMapper.

Response Selection: Implements ResponseSelector to manage FAQ responses effectively.

Comprehensive Responses: Provides detailed responses to a wide range of queries about ICEGATE registration.
